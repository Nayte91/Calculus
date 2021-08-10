<?php

namespace App\Service;

interface CalculatorInterface
{
    public function compute(string $entry): float;
}