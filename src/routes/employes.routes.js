import { Router } from 'express';
import { getEmployes, postEmployes, updateEmploye, deleteEmployes, getEmploye } from '../controllers/employes.controller.js'


const router = Router()

router.get('/getEmployes/:id', getEmploye)

router.get('/getEmployes', getEmployes)

router.post('/registerEmployes', postEmployes)

router.patch('/updateEmployes/:id', updateEmploye) //permite actualizar parcialmente o solo un dato

router.delete('/deleteEmployes/:id', deleteEmployes)

export default router;