<?php

namespace App\Service;

class Calculator implements CalculatorInterface
{
    public function compute(string $entry): float
    {
        $this->validateString($entry);

        try {
            $calculated = eval("return " . $entry . ";");
        } catch (\ParseError) {
            throw new CalculatorException('are you kidding ? Please use proper front to avoid syntax error.');
        }

        return round(num: $calculated, precision: 8);
    }

    private function validateString(string $suspicious): void
    {
        if (preg_match(pattern: '/[^0-9+\-*\/.]/', subject: $suspicious))
            throw new CalculatorException('are you kidding ? Only char allowed are / * + - numbers and .');
    }
}