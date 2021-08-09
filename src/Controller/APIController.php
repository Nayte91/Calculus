<?php

namespace App\Controller;

use App\Service\Calculator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class APIController extends AbstractController
{
    #[Route(path:'/computation', name: 'computation')]
    public function compute(Calculator $calculator): Response
    {
        return $this->json([
            'result' => $calculator->getResult(),
        ]);
    }
}
