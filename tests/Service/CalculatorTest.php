<?php

namespace App\Tests\Service;

use App\Service\Calculator;
use App\Service\CalculatorException;
use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase
{
    /** @dataProvider getWorkingCases */
    public function testCompute(float $expected, string $entry): void
    {
        $calculator = new Calculator();

        $this->assertEquals($expected, $calculator->compute($entry));
    }

    /** @dataProvider getThrowingCases */
    public function testThrowing(string $badEntry)
    {
        $this->expectException(CalculatorException::class);

        $calculator = new Calculator();
        $calculator->compute($badEntry);
    }

    public function getWorkingCases(): array
    {
        return [
            [7, "4+3"],
            [10, "1+2+3+4"],
            [4000, "1000.+999+2001"],
            [-2.1, "-3+.9"],
            [0, "0+0"],
            [14, "8+3.*2"],
            [8.6, "8+3*.2"],
            [90165, "27+38+81+48*33*53+91*53+82*14+96"],
            [616222, "22*26*53+66*8+7*76*25*44+78+100"],
            [170011, "57+14*71+86*39*24+48*3+92*16*60"],
            [167.56730357, "93-10/7-66/50/10/32+35+33+12-4"],
            [281.78915094, "81-12+46+83/40/53+34+95/80*52+71"],
            [9.18367347, "32/70*44./77*89/12*45+15+47-90-50"],
            [-7073.74798689, "85.21+5.42+34.96*37.59-60.15*94.31-47.53*59.03-50.54/14.01/44"],
            [65.61703153, "0.61-38.2+46.08/71.23*85.53-68.92+61.41/46.79*88.71+9.93/27"],
            [0.28209505, "50.08-47.99/68.32*73.39+80.06/46.73+13.55*94.26/30.13/25.74/41"]
        ];
    }

    public function getThrowingCases(): array
    {
        return [
            ["65+z78"],
            ["5.3%78.23"],
            ["6+<2"],
            ["7++++"],
            ["..."]
        ];
    }
}
