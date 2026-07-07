const fs = require('fs');
const lines = fs.readFileSync('/.aistudio/artifacts/brain/8154addd-f4b4-4c38-ac8c-f7048101e0d9/.system_generated/logs/transcript.jsonl', 'utf-8').split('\n').filter(Boolean);
for (const line of lines) {
  const obj = JSON.parse(line);
  if (obj.tool_call_id && obj.output) {
    if (obj.output.includes("import { useState, useEffect } from 'react';") && obj.output.includes("export default function Navbar() {")) {
      console.log("FOUND FULL FILE");
      fs.writeFileSync('Navbar_recovered.txt', obj.output);
    }
  }
}
