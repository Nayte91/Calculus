<?php

namespace App\Tests\Service;

use PHPUnit\Framework\TestCase;
use App\Service\Calculator\CalculatorException;
use App\Service\Calculator\CalculatorParser;

class CalculatorParserTest extends TestCase
{
    /** @dataProvider getThrowingCases */
    public function testThrowing(string $badEntry): void
    {
        $this->expectException(CalculatorException::class);

        $parser = new CalculatorParser;
        $parser->parse($badEntry);
    }

    public function getThrowingCases(): array
    {
        return [
            ["65+z78"],
            ["5.3%78.23"],
            ["6+<2"],
            ["7++++"],
            ["..."],
            ["8+3****.2"],
            ["27+38+81+48*33*53+91*53+82*14+----96"]
        ];
    }
}
