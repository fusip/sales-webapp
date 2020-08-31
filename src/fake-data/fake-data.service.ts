import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from 'rxjs';

export class FakeDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return { };
  }

}
