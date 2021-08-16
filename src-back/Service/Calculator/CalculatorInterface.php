<?php

namespace App\Service\Calculator;

interface CalculatorInterface
{
    /** @throws CalculatorException */
    public function compute(string $entry): float;
}