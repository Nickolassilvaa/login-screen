export interface data {
  column: {
    titleColumn: string;
    contentColumn: {
      item: {
        title: string;
        link: string;
      }[];
    };
  }[];
}

export const title: data = {
  column: [
    {
      titleColumn: "Pedido",
      contentColumn: {
        item: [
          { title: "Pedido - Detalhe", link: "" },
          { title: "Pedido - Cancelamento", link: "" },
        ],
      },
    },
    {
      titleColumn: "Ordem de Separação",
      contentColumn: {
        item: [
          { title: "Criar SI", link: "" },
          { title: "Imprimir SI", link: "" },
          { title: "Confirmar Separação", link: "" },
          { title: "SI - Detalhe", link: "" },
        ],
      },
    },
    {
      titleColumn: "Pacote",
      contentColumn: {
        item: [
          { title: "Criar Pacote", link: "" },
          { title: "Pacote - Consulta", link: "" },
          { title: "Pacote - Detalhe", link: "" },
          { title: "Fechar Pacote", link: "" },
          { title: "Pacote - Monitor", link: "" },
          { title: "Alterar Transportadora", link: "" },
          { title: "Cancelar Aprovação", link: "" },
        ],
      },
    },
    {
      titleColumn: "Faturamento",
      contentColumn: {
        item: [
          { title: "Lista para Faturamento", link: "" },
          { title: "NF Saída - Detalhe", link: "" },
          { title: "NF - Coleta", link: "" },
          { title: "NF - Entrega", link: "" },
        ],
      },
    },
    {
      titleColumn: "Controle Estoque",
      contentColumn: {
        item: [
          { title: "Registrar Local", link: "" },
          { title: "Excluir Local", link: "" },
          { title: "Registrar Local - Material", link: "" },
          { title: "Movimentação de Peças", link: "" },
          { title: "Ajuste Estoque Local", link: "" },
          { title: "Estoque - Consulta", link: "" },
          { title: "Estoque Local - Consulta", link: "" },
        ],
      },
    },
    {
      titleColumn: "Inventário",
      contentColumn: {
        item: [
          { title: "Bloquear Local - Inventário", link: "" },
          { title: "Ficha de Inventário", link: "" },
          { title: "Confirmar Contagem", link: "" },
          { title: "Inventário - Detalhe", link: "" },
          { title: "Inventário - Situação", link: "" },
          { title: "Inventário - Cancelamento", link: "" },
          { title: "Inventário - Consulta", link: "" },
          { title: "Inventário - Fechado", link: "" },
          { title: "Relatório - Contábil", link: "" },
          { title: "Relatório - Contábil EBS", link: "" },
          { title: "Relatório - Local", link: "" },
          { title: "Relatório - Funcionário", link: "" },
          { title: "Relatório - Físico x Lógico", link: "" },
        ],
      },
    },
    {
      titleColumn: "Pedido - Compra",
      contentColumn: {
        item: [
          { title: "Consulta Pedido KHI", link: "" },
          { title: "KHI Compra -Detalhe", link: "" },
          { title: "(Novo) KHI Compra - Sugestão", link: "" },
          { title: "KHI Compra - Cancelamento", link: "" },
          { title: "EDI para Despachante", link: "" },
          { title: "EDI Despachante Recebe", link: "" },
          { title: "Trânsito - Detalhe", link: "" },
          { title: "Confirma Entrada", link: "" },
          { title: "Criar E.I", link: "" },
          { title: "E.I - Detalhe", link: "" },
          { title: "Confirmar E.I", link: "" },
          { title: "NF Entrada - Detalhe", link: "" },
          { title: "Confirmar Embarque", link: "" },
          { title: "P06 - Monitor", link: "" },
        ],
      },
    },
    {
      titleColumn: "Material",
      contentColumn: {
        item: [
          { title: "Cadastro Material", link: "" },
          { title: "Alterar Material", link: "" },
          { title: "Atualizar Material", link: "" },
          { title: "Cadastro Material - Peças", link: "" },
          { title: "Cadastro Material - Fiscal", link: "" },
          { title: "Cadastro Material - Lote (Com PMA)", link: "" },
          { title: "Cadastro Material - Lote (Sem PMA)", link: "" },
          {
            title: "Cadastro Material - Lote Substitutiva (Sem BSB)",
            link: "",
          },
          { title: "Regras Fiscais - Sem Cadastro", link: "" },
          { title: "Consultar Material", link: "" },
          { title: "Consultar Substitutiva", link: "" },
          { title: "Cadastro Substitutiva", link: "" },
          { title: "Cadastro Material EBS", link: "" },
        ],
      },
    },
    {
      titleColumn: "Precificação",
      contentColumn: {
        item: [
          { title: "Cadastro Preço de Peças", link: "" },
          { title: "Consultar Preço de Peças", link: "" },
          { title: "Validar Preço de Lote", link: "" },
          { title: "Cadastro de CIF RATE", link: "" },
        ],
      },
    },
    {
      titleColumn: "Relatórios",
      contentColumn: {
        item: [
          { title: "Consulta Invoice", link: "" },
          { title: "Validação Plano de Produção", link: "" },
          { title: "Consultar Conciliação de Importação", link: "" },
          { title: "Consultar Lançamento de Importação OSGT", link: "" },
          { title: "Movimentação de Peças", link: "" },
          { title: "Entradas RI - Mastersaf", link: "" },
          {
            title: "Plano de Produção",
            link: "http://157.116.105.7:3000/planoProducao",
          },
        ],
      },
    },
  ],
};
