import { cpf, cnpj } from 'cpf-cnpj-validator';
import { IFormatProvider } from '../@types/providers';

export default (): IFormatProvider => {
  const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const { format: formatDate } = new Intl.DateTimeFormat('pt-BR');

  const convertFromCents = (amount: number) => (formatPrice(amount / 100));

  const formatCpf = (numeroDocumento: string): string => cpf.format(numeroDocumento);

  const formatCnpj = (numeroDocumento: string): string => cnpj.format(numeroDocumento);

  return ({
    formatPrice,
    formatDate,
    convertFromCents,
    formatCpf,
    formatCnpj,
  })
}
