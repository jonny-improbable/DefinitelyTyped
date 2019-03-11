import protocPlugin, {
  CodeGeneratorRequest, CodeGeneratorResponse, CodeGeneratorResponseError,
  OutputFiles
} from 'protoc-plugin';

protocPlugin(filesToGenerate => {
  const files: OutputFiles = [];
  files.push({ name: "my_file.ts.d", content: "example" });
  return files;
});

CodeGeneratorRequest()
  .then(req => {
    const files: OutputFiles = [];
    files.push({ name: "my_file.ts.d", content: "example" });
    return files;
  })
  .then(CodeGeneratorResponse())
  .catch(CodeGeneratorResponseError());
