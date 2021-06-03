import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getLandingPage() {
        return 'Welcome to posting board!';
    }
}
