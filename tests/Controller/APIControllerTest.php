<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

class APIControllerTest extends WebTestCase
{
    /** @dataProvider getMethodResults */
    public function testComputationOnlyAcceptsPOSTRequests(string $method, bool $shouldBeAllowed): void
    {
        $client = static::createClient();
        if (!$shouldBeAllowed) {
            $client->catchExceptions(false);
            $this->expectException(MethodNotAllowedHttpException::class);
        }

        $client->request($method, '/computation');

        $shouldBeAllowed && $this->assertResponseIsSuccessful();
    }

    public function testResponseIsJSON(): void
    {
        $client = static::createClient();

        $client->request(method: 'POST', uri: '/computation', content: '{"entry": "4+3"}');

        $this->assertResponseHasHeader('Content-Type', 'application/json');
        $this->assertJson($client->getResponse()->getContent());
    }

    public function getMethodResults(): array
    {
        return [
            ['POST', true],
            ['GET', false],
            ['PUT', false],
            ['PATCH', false],
            ['DELETE', false]
        ];
    }
}
