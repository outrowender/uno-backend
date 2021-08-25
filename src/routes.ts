import { Router } from 'express'
import { CreateRoomController } from './controllers/create-room-controller';
import { adaptRoute } from './shared/adapters/adapt-route';

const router = Router();

router.post('/room', adaptRoute(new CreateRoomController()))

export default router;