<?php

namespace App\Service;

class Calculator
{
    public $result = '7';

    public function getResult(): string
    {
        return $this->result;
    }
}