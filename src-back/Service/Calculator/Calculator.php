<?php

namespace App\Service\Calculator;

use ParseError;

class Calculator implements CalculatorInterface
{
    private const PREG_LIST = '/[+*\-\/]/';
    private static array $primaries = ["*", "/"];
    private static array $secondaries = ["+", "-"];

    public function compute(string $entry): float
    {
        try {
            $this->validateString($entry);
        } catch (ParseError $exception) {
            throw new CalculatorException(
                          'are you kidding ? Please use proper front to avoid syntax errors.',
                previous: $exception
            );
        }

        return round($this->calculate($entry), precision: 8);
    }

    private function validateString(string $suspicious): void
    {
        if (
            preg_match('/[^0-9+\-*\/.]/', $suspicious)
            || preg_match('/[\-]{3,}/', $suspicious)
            || preg_match('/([.+*\/])\1/', $suspicious)
        ) {
            throw new ParseError('Only characters allowed are / * + - numbers and .');
        }
    }

    private function explodeOperandsAndOperators(string $entry): array
    {
        $operands = preg_split(self::PREG_LIST, $entry, flags: PREG_SPLIT_OFFSET_CAPTURE);

        foreach ($operands as &$operand) {
            $position = $operand[1];

            if ($position < 1) {
                continue;
            }

            $operator = $entry[$position - 1];
            $operand[1] = $operator;
        }

        return $operands;
    }

    /** takes the parsed array, and gives back the same array but smashed once. */
    private function smashRecursively(array $entries, array $operators): array
    {
        foreach ($entries as $key => $entry) {
            if ($entry[1] && in_array($entry[1], $operators)) {
                $result = match ($entry[1]) {
                    '*' => (float)$entries[$key - 1][0] * (float)$entries[$key][0],
                    '/' => (float)$entries[$key - 1][0] / (float)$entries[$key][0],
                    '-' => (float)$entries[$key - 1][0] - (float)$entries[$key][0],
                    '+' => (float)$entries[$key - 1][0] + (float)$entries[$key][0],
                };

                $entries[$key - 1][0] = $result;
                unset($entries[$key]);

                return $this->smashRecursively(array_values($entries), $operators);
            }
        }

        return $entries;
    }

    private function calculate(string $entry): float
    {
        $explodedEntries = $this->explodeOperandsAndOperators($entry);

        $primarySmashed = $this->smashRecursively($explodedEntries, self::$primaries);
        $secondarySmashed = $this->smashRecursively($primarySmashed, self::$secondaries);

        return $secondarySmashed[0][0];
    }
}