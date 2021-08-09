<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class APIController extends AbstractController
{
    #[Route(path:'/api', name: 'api')]
    public function index(): Response
    {
        return $this->json([
            'result' => 'Coucou',
        ]);
    }
}
