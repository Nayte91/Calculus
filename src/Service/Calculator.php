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
            throw new CalculatorException(message: 'are you kidding ? Please use proper front to avoid syntax errors.', previous: $exception);
        }

        return round(num: $calculated, precision: 8);
    }

    private function validateString(string $suspicious): void
    {
        if (preg_match(pattern: '/[^0-9+\-*\/.]/', subject: $suspicious)) throw new ParseError('Only characters allowed are / * + - numbers and .');
    }
}