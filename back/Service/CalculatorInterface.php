<?php

namespace App\Service;

interface CalculatorInterface
{
    /** @throws CalculatorException */
    public function compute(string $entry): float;
}