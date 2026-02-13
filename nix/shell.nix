{
  mkShellNoCC,
  nodejs-slim,
  pnpm,
}:
mkShellNoCC {
  name = "node";
  packages = [
    nodejs-slim
    pnpm
  ];
}
