<?php

namespace App\Service;

use ParseError;

class Calculator implements CalculatorInterface
{
    public function compute(string $entry): float
    {
        try {
            $this->validateString($entry);
            $calculated = eval("return " . $entry . ";");
        } catch (ParseError $exception) {
            throw new CalculatorException('are you kidding ? Please use proper front to avoid syntax errors.', previous: $exception);
        }

        return round($calculated, precision: 8);
    }

    private function validateString(string $suspicious): void
    {
        if (preg_match('/[^0-9+\-*\/.]/', $suspicious)) throw new ParseError('Only characters allowed are / * + - numbers and .');
    }
}