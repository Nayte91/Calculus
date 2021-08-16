<?php

namespace App\Controller;

use App\Service\CalculatorException;
use App\Service\CalculatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/', 'home')]
    public function home(): Response
    {
        return $this->render('home.html.twig');
    }

    #[Route('/computation', 'computation', methods: ['POST'])]
    public function compute(CalculatorInterface $calculator, Request $request): Response
    {
        $decodedEntry = json_decode($request->getContent(), true)['entry'] ?? '0';

        try {
            $result = $calculator->compute($decodedEntry);
        } catch (CalculatorException $exception) {
            return $this->json(['error' => $exception->getMessage()], status: 400);
        }

        return $this->json([
            'entry' => $decodedEntry,
            'result' => $result,
        ]);
    }
}
