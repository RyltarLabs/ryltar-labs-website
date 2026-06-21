import { DiagramNode, DiagramArrow } from "@/components/sections/diagram-primitives";

export function FrontendDiagram() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <DiagramNode label="Design System" sub="tokens · componentes" />
      <DiagramArrow />
      <DiagramNode label="React / Next.js" sub="SSR · ISR · SPA" />
      <DiagramArrow />
      <DiagramNode label="Deploy" sub="CDN · Edge · CI/CD" tone="accent" />
    </div>
  );
}

export function BackendDiagram() {
  return (
    <div className="flex flex-col items-center gap-3">
      <DiagramNode label="Client / Mobile" className="w-full max-w-[220px]" />
      <div className="font-mono text-accent/50">│</div>
      <DiagramNode
        label="API Gateway"
        sub="auth · rate-limit · routing"
        tone="accent"
        className="w-full max-w-[280px]"
      />
      <div className="font-mono text-accent/50">│</div>
      <div className="flex flex-wrap justify-center gap-2">
        <DiagramNode label="Orders" />
        <DiagramNode label="Payments" />
        <DiagramNode label="Notifications" />
      </div>
      <div className="font-mono text-accent/50">│</div>
      <div className="flex flex-wrap justify-center gap-2">
        <DiagramNode label="PostgreSQL" sub="primary DB" />
        <DiagramNode label="Redis" sub="cache" />
        <DiagramNode label="S3" sub="files" />
      </div>
    </div>
  );
}

export function LegacyDiagram() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <div className="flex flex-col gap-2">
        <DiagramNode label="PHP 5 · Oracle" tone="bad" />
        <DiagramNode label="Sem testes" tone="bad" />
        <DiagramNode label="Deploy manual" tone="bad" />
      </div>
      <div className="flex flex-col items-center font-mono text-[10px] text-text-tertiary">
        <span className="text-accent text-base">──►</span>
        migração gradual
      </div>
      <div className="flex flex-col gap-2">
        <DiagramNode label="Node.js · PostgreSQL" tone="accent" />
        <DiagramNode label="91% coverage" tone="accent" />
        <DiagramNode label="CI/CD automático" tone="accent" />
      </div>
    </div>
  );
}

export function AiDiagram() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <DiagramNode label="Input" sub="texto · docs · voz" />
        <DiagramArrow />
        <DiagramNode label="LLM / Model" sub="GPT-4o · Claude" />
        <DiagramArrow />
        <DiagramNode label="Agente" sub="tools · memória · RAG" />
        <DiagramArrow />
        <DiagramNode label="Ação" sub="sistema · API · humano" tone="accent" />
      </div>
      <div className="font-mono text-accent/40 text-sm">│</div>
      <DiagramNode
        label="Observabilidade"
        sub="logs · traces · eval · feedback"
        className="w-full max-w-[260px]"
      />
    </div>
  );
}

export function DataDiagram() {
  return (
    <div className="flex flex-col items-center gap-3">
      <DiagramNode
        label="Fontes: banco · API · planilha · evento"
        className="w-full max-w-[360px]"
      />
      <div className="font-mono text-accent/50">│</div>
      <DiagramNode
        label="ETL / Pipeline: Airflow · dbt"
        tone="accent"
        className="w-full max-w-[320px]"
      />
      <div className="font-mono text-accent/50">│</div>
      <DiagramNode
        label="Data Warehouse: BigQuery · Redshift"
        className="w-full max-w-[340px]"
      />
      <div className="font-mono text-accent/50">│</div>
      <div className="flex flex-wrap justify-center gap-2">
        <DiagramNode label="Modelos ML" sub="previsão · classificação" />
        <DiagramNode label="Dashboard" sub="KPIs · alertas" tone="accent" />
      </div>
    </div>
  );
}

export function AutomationDiagram() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-2">
      <div className="flex flex-col gap-2">
        <DiagramNode label="WhatsApp" sub="Business API" />
        <DiagramNode label="Instagram" sub="Graph API" />
        <DiagramNode label="Formulário" sub="web" />
      </div>
      <DiagramArrow />
      <DiagramNode
        label="Orquestrador"
        sub="N8N · custom"
        tone="accent"
      />
      <DiagramArrow />
      <div className="flex flex-col gap-2">
        <DiagramNode label="CRM" sub="HubSpot" />
        <DiagramNode label="ERP" sub="SAP · TOTVS" />
        <DiagramNode label="Dashboard" sub="Ryltar" tone="accent" />
      </div>
    </div>
  );
}

export const DIAGRAM_MAP = {
  frontend: FrontendDiagram,
  backend: BackendDiagram,
  legacy: LegacyDiagram,
  ai: AiDiagram,
  data: DataDiagram,
  automation: AutomationDiagram,
} as const;
