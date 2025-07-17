export default function Page() {
  return (
    <article className="prose mx-auto p-4">
      <h1>Understanding Time Complexity of an Algorithm</h1>

      <p>
        When writing algorithms, knowing how efficient they are is crucial.
        <strong>Time complexity</strong> measures how the running time of an
        algorithm grows as the input size increases.
      </p>

      <h2>What is Time Complexity?</h2>
      <p>
        Time complexity is a mathematical way to describe the amount of time an
        algorithm takes to run, relative to the size of its input <code>n</code>.
      </p>
      <ul>
        <li>Focuses on dominant operations growing fastest with <code>n</code>.</li>
        <li>Ignores constants and smaller terms for scalability.</li>
        <li>Expressed using <strong>Big O notation</strong> (e.g., O(n), O(log n)).</li>
      </ul>

      <h2>Why Time Complexity Matters?</h2>
      <p>
        It helps you predict performance on large inputs, compare algorithms,
        and write scalable, efficient code.
      </p>

      <h2>Common Time Complexities and Examples</h2>
      <table>
        <thead>
          <tr>
            <th>Time Complexity</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>O(1)</td>
            <td>Constant time</td>
            <td>Accessing an array element</td>
          </tr>
          <tr>
            <td>O(log n)</td>
            <td>Logarithmic time</td>
            <td>Binary search</td>
          </tr>
          <tr>
            <td>O(n)</td>
            <td>Linear time</td>
            <td>Simple loop</td>
          </tr>
          <tr>
            <td>O(n log n)</td>
            <td>Linearithmic time</td>
            <td>Efficient sorting algorithms</td>
          </tr>
          <tr>
            <td>O(n²)</td>
            <td>Quadratic time</td>
            <td>Nested loops</td>
          </tr>
        </tbody>
      </table>

      <h2>How to Analyze Time Complexity</h2>
      <ol>
        <li>Identify the basic operation that runs most frequently.</li>
        <li>Count how many times it runs relative to input size <code>n</code>.</li>
        <li>Express the count as a function of <code>n</code>.</li>
        <li>Simplify: keep dominant terms, ignore constants.</li>
      </ol>

      <h2>Example: Simple Loop</h2>
      <pre>
        <code>
{`for (int i = 0; i < n; i++) {
  cout << i << endl;
}`}
        </code>
      </pre>
      <p>Time complexity: <strong>O(n)</strong> (linear time)</p>

      <h2>Example: Nested Loops</h2>
      <pre>
        <code>
{`for (int i = 0; i < n; i++) {
  for (int j = 0; j < n; j++) {
    cout << i * j << endl;
  }
}`}
        </code>
      </pre>
      <p>Time complexity: <strong>O(n²)</strong> (quadratic time)</p>

      <h2>Example: Binary Search</h2>
      <p>Divides input size in half each step, number of steps proportional to <code>log n</code>.</p>
      <p>Time complexity: <strong>O(log n)</strong> (logarithmic time)</p>

      <h2>Conclusion</h2>
      <p>
        Time complexity helps you understand and write efficient, scalable
        algorithms. Focus on loops and recursion to analyze complexity.
      </p>
    </article>
  );
}
