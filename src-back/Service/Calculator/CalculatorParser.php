<?php

namespace App\Service\Calculator;

use App\Service\Calculator;
use ParseError;

class CalculatorParser
{
    public function parse(string $entry): array
    {
        $this->validateString($entry) || throw new ParseError('Only characters allowed are / * + - numbers and .');

        return $this->explodeOperandsAndOperators($entry);
    }

    private function validateString(string $suspicious): bool
    {
        return !(preg_match('/[^0-9+\-*\/.]/', $suspicious)
            || preg_match('/[\-]{3,}/', $suspicious)
            || preg_match('/([.+*\/])\1/', $suspicious)
        );
    }

    private function explodeOperandsAndOperators(string $entry): array
    {
        $splitOperations = preg_split(Calculator::PREG_LIST, $entry, flags: PREG_SPLIT_OFFSET_CAPTURE);

        foreach ($splitOperations as &$splitOperation) {
            $position = $splitOperation[1];

            if ($position < 1) {
                continue;
            }

            $operator = $entry[$position - 1];
            $splitOperation[1] = $operator;
        }

        return $splitOperations;
    }
}