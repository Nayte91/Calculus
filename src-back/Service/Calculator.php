<?php

namespace App\Service;


use App\Service\Calculator\CalculatorException;
use App\Service\Calculator\CalculatorInterface;
use App\Service\Calculator\CalculatorParser;
use ParseError;

class Calculator implements CalculatorInterface
{
    public const PREG_LIST = '/[+*\-\/]/';
    private static array $primaries = ["*", "/"];
    private static array $secondaries = ["+", "-"];
    private array $parsedEntry;

    public function __construct(
        private CalculatorParser $parser,
    ) {
    }

    public function compute(string $entry): float
    {
        try {
            $this->parsedEntry = $this->parser->parse($entry);
        } catch (ParseError $exception) {
            throw new CalculatorException(
                          'are you kidding ? Please use proper front to avoid syntax errors.',
                previous: $exception
            );
        }

        return round($this->calculate($this->parsedEntry), precision: 8);
    }

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

    private function calculate(array $entry): float
    {
        $primarySmashed = $this->smashRecursively($entry, self::$primaries);
        $secondarySmashed = $this->smashRecursively($primarySmashed, self::$secondaries);

        return $secondarySmashed[0][0];
    }
}