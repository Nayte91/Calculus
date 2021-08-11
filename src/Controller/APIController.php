<?php

namespace App\Controller;

use App\Service\CalculatorException;
use App\Service\CalculatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class APIController extends AbstractController
{
    #[Route(path:'/computation', name: 'computation', methods: ['POST'])]
    public function compute(CalculatorInterface $calculator, Request $request): Response
    {
        $decodedEntry = json_decode($request->getContent(), true)['entry'] ?? '';

        try {
            $result = $calculator->compute($decodedEntry);
        } catch (CalculatorException $exception) {
            return $this->json(data:['error' => $exception->getMessage()], status: 400);
        }

        return $this->json(['result' => (string) $result]);
    }
}
