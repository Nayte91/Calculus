<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class APIController extends AbstractController
{
    #[Route(path:'/computation', name: 'computation')]
    public function compute(): Response
    {
        return $this->json([
            'result' => '7',
        ]);
    }
}
