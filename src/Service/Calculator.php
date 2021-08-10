<?php

namespace App\Service;

class Calculator
{
    public int $result = 7;

    public function getResult(): int
    {
        return $this->result;
    }
}