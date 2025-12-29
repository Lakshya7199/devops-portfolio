export const researchData = {
  title: "Technical Research & Explorations",
  description: "Deep dives into DevOps, AWS, OpenSearch, and Kubernetes",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This section highlights hands-on research and real-world problem solving across modern cloud and DevOps systems.",
  items: [
    {
      title: "OpenSearch RBAC with IAM Identity Center",
      summary:
        "Implemented fine-grained access control for Amazon OpenSearch using SAML integration with IAM Identity Center to replace shared credentials and improve security posture.",
      link: "/docs/opensearch-rbac.pdf",
    },
    {
      title: "API Abuse Detection using OpenSearch",
      summary:
        "Designed a log-based detection mechanism to identify high-frequency API abuse patterns and trigger automated alerts using SNS and Lambda.",
      link: "/docs/api-abuse-detection.pdf",
    },
    {
      title: "Glue Workflow Orchestration",
      summary:
        "Researched Step Functions orchestration patterns to ensure Glue workflows complete successfully before marking execution as succeeded.",
      link: "/docs/glue-workflow.pdf",
    },
  ],
};
