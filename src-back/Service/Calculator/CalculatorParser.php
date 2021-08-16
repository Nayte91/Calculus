<?php

namespace App\Service\Calculator;

use ParseError;

class CalculatorParser
{
    public function parse(string $entry): array
    {
        try {
            $this->validateString($entry);
        } catch (ParseError $exception) {
            throw new CalculatorException('are you kidding ? Please use proper front to avoid syntax errors.', previous: $exception);
        }

        return $this->explodeOperandsAndOperators($entry);
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
        $operands = preg_split(Calculator::PREG_LIST, $entry, flags: PREG_SPLIT_OFFSET_CAPTURE);

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
}