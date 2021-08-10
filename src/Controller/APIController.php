<?php

namespace App\Controller;

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
        $decoded = '';
        if ($request->getContent()) {
            $decoded = json_decode($request->getContent(), true)['entry'];
        }

        return $this->json([
            'result' => (string) $calculator->compute($decoded)
        ]);
    }
}
