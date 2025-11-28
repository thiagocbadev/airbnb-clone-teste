# 🏨 Airbnb Clone - Teste Técnico

Este projeto é um clone simplificado do Airbnb desenvolvido como parte de um teste técnico. A aplicação utiliza a arquitetura moderna do Next.js 15 para listar acomodações, exibir detalhes e garantir performance com estratégias de cache e renderização no servidor (SSR).

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success)
![Coverage](https://img.shields.io/badge/Test_Coverage-50%25+-success)

## 🚀 Tecnologias Utilizadas

O projeto segue rigorosamente a stack solicitada:

* **Framework:** Next.js 15 (App Router)
* **Linguagem:** TypeScript
* **Estilização:** TailwindCSS + ShadCN/UI
* **Ícones:** Lucide React
* **Testes:** Jest + React Testing Library
* **Qualidade de Código:** ESLint + Prettier

## ✨ Funcionalidades e Diferenciais

* **Listagem de Quartos:** Consumo de API externa com tipagem estrita via TypeScript.
* **Detalhes da Acomodação:** Roteamento dinâmico (`/rooms/[id]`) exibindo informações completas.
* **Performance & Cache:** Implementação de `revalidate: 3600` (ISR) para cachear requisições por 1 hora e otimização de imagens com `next/image`.
* **Design System:** Interface polida usando ShadCN, com personalização de cores (Airbnb Red) e interações de hover/zoom.
* **Responsividade:** Grid adaptativo que vai de 1 coluna (mobile) até 5 colunas (telas largas).
* **Testes Unitários:** Cobertura de testes no componente principal (`RoomCard`) garantindo a integridade da interface.

## 🛠️ Como rodar o projeto localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/airbnb-clone.git](https://github.com/SEU_USUARIO/airbnb-clone.git)
    cd airbnb-clone
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis (Opcional):**
    O projeto já está configurado para consumir a MockAPI padrão. Nenhuma configuração extra de `.env` é necessária para rodar o básico.

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse no navegador:**
    Abra [http://localhost:3000](http://localhost:3000)

## 🧪 Rodando os Testes

Para validar os componentes e garantir a cobertura solicitada:

```bash
npm run test