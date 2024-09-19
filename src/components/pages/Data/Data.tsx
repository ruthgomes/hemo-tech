import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table'

export function Data() {
    return (
      <div className='min-h-screen bg-[#f5fdf1] flex justify-center items-center'>
            {/* Tables with fictitious data */}
        <div className='w-full max-w-5xl bg-[#ecf8e9] rounded-lg shadow-lg p-8'>
            <h1 className='text-3xl font-bold text-center text-green-600 mb-10'>
                DADOS ESTATÍSTICOS
            </h1>
            {/* Blood collection table */}
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                    Coletas de Sangue
                </h2>
                <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Data
                        </TableHead>
                        <TableHead>
                            Paciente
                        </TableHead>
                    <TableHead>
                        Volume Coletado (ml)
                    </TableHead>
                    <TableHead>
                        Tipo Sanguíneo
                    </TableHead>
                    </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>12/09/2024</TableCell>
                  <TableCell>Ruth Gomes Duque</TableCell>
                  <TableCell>450</TableCell>
                  <TableCell>O+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13/09/2024</TableCell>
                  <TableCell>Romeu e Julieta da Silva</TableCell>
                  <TableCell>350</TableCell>
                  <TableCell>A-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>14/09/2024</TableCell>
                  <TableCell>João e Maria dos Santos</TableCell>
                  <TableCell>500</TableCell>
                  <TableCell>B+</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {/* Tabela de Equipamentos Utilizados */}
            <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4">Equipamentos Utilizados</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID do Equipamento</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Última Manutenção</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>EQP-001</TableCell>
                  <TableCell>Mão Robótica A-200</TableCell>
                  <TableCell>Em Uso</TableCell>
                  <TableCell>10/08/2024</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>EQP-002</TableCell>
                  <TableCell>Hemomix B-300</TableCell>
                  <TableCell>Em Manutenção</TableCell>
                  <TableCell>05/09/2024</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>EQP-003</TableCell>
                  <TableCell>Coletor de Sangue C-100</TableCell>
                  <TableCell>Disponível</TableCell>
                  <TableCell>01/09/2024</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {/* Tabela de Total de Doações por Tipo Sanguíneo */}
            <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4">Total de Doações</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo Sanguíneo</TableHead>
                  <TableHead>Total de Doações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>O+</TableCell>
                  <TableCell>150</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>A-</TableCell>
                  <TableCell>120</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>B+</TableCell>
                  <TableCell>100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </div>
        </div>
    );
}