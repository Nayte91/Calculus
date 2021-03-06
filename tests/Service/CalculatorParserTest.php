<?php

namespace App\Tests\Service;

use PHPUnit\Framework\TestCase;
use App\Service\Calculator\CalculatorParser;
use ParseError;

class CalculatorParserTest extends TestCase
{
    /** @dataProvider getThrowingCases */
    public function testThrowing(string $badEntry): void
    {
        $this->expectException(ParseError::class);

        $parser = new CalculatorParser;
        $parser->parse($badEntry);
    }

    public static function getThrowingCases(): array
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
