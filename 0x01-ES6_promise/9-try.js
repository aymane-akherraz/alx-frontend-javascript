export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
    return queue;
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
