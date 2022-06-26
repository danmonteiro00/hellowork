import { v4 } from 'uuid';
import { ISecurityProvider } from '../@types/providers';

export default (): ISecurityProvider => {
  const createUuid = () => v4();

  return ({
    createUuid,
  });
};
