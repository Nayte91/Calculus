<?php

namespace App\Tests;

use App\Service\Calculator;
use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase
{
    public function testSomething(): void
    {
        $calulator = new Calculator();

        $this->assertSame('7', $calulator->getResult());
    }
}
