<script>
  /* Scroll reveal */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* 1. Arrow Functions */
  const runArrow = () => {
    const add    = (a, b) => a + b;
    const square = n => n * n;
    const greet  = name => `Hello, ${name}!`;
    const evens  = arr => arr.filter(n => n % 2 === 0);
    const sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);
    document.getElementById('arrow-out').textContent =
      `add(3, 4)         → ${add(3, 4)}\n` +
      `square(7)         → ${square(7)}\n` +
      `greet("World")    → ${greet("World")}\n` +
      `evens([1..8])     → [${evens([1,2,3,4,5,6,7,8])}]\n` +
      `sumAll(1,2,3,4,5) → ${sumAll(1,2,3,4,5)}`;
  };

  /* 2. Promises */
  const simulateAPI = (label, ms, fail = false) =>
    new Promise((resolve, reject) =>
      setTimeout(() => fail
        ? reject(new Error(`${label} failed`))
        : resolve(`${label} ✓`), ms)
    );

  const runPromise = async () => {
    const out = document.getElementById('promise-out');
    const nodes = ['pn1','pn2','pn3'].map(id => document.getElementById(id));
    nodes.forEach(n => n.classList.remove('fulfilled','rejected','pending'));
    nodes[0].classList.add('pending');
    out.textContent = '⏳ Promise pending…';
    try {
      const result = await simulateAPI('Data fetch', 1200, Math.random() < 0.3);
      nodes[1].classList.add('fulfilled');
      out.textContent = `✅ Resolved: ${result}\n.then() → processing…\n✅ All done!`;
    } catch (err) {
      nodes[2].classList.add('rejected');
      out.textContent = `❌ Rejected: ${err.message}\n.catch() handled it gracefully.`;
    }
  };

  /* 3. Async/Await */
  const delay = ms => new Promise(r => setTimeout(r, ms));
  const runAsync = async () => {
    const ids = ['step1','step2','step3','step4'];
    ids.forEach(id => document.getElementById(id).classList.remove('active','done'));
    for (const id of ids) {
      const el = document.getElementById(id);
      el.classList.add('active');
      await delay(700);
      el.classList.replace('active','done');
    }
  };

  /* 4. Destructuring */
  const runDestruct = () => {
    const { name: devName, skills: [primary] = ['JS'], meta: { level = 'Junior' } = {} } =
      { name: 'Alex', skills: ['JavaScript', 'React'], meta: { level: 'Senior' } };
    let x = 42, y = 99;
    [x, y] = [y, x];
    const [first, ...rest] = [10, 20, 30, 40, 50];
    const getInfo = ({ title, author: { name: aName } }) => `${title} by ${aName}`;
    const bookInfo = getInfo({ title: "You Don't Know JS", author: { name: 'Kyle Simpson' } });
    document.getElementById('destruct-out').textContent =
      `Object:  devName="${devName}", primary="${primary}", level="${level}"\n` +
      `Swap:    x=${x}, y=${y}  (were 42 and 99)\n` +
      `Rest:    first=${first}, rest=[${rest}]\n` +
      `Params:  "${bookInfo}"`;
  };

  /* 6. Template Literals */
  const updateTemplate = () => {
    const name = document.getElementById('tl-name').value || 'Developer';
    const role = document.getElementById('tl-role').value || 'Coder';
    const lang = document.getElementById('tl-lang').value || 'JS';
    const year = parseInt(document.getElementById('tl-year').value) || 2020;
    const exp  = new Date().getFullYear() - year;
    const sum  = lang.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    document.getElementById('tl-result').textContent =
      `\`Hello, I'm \${name}!\`\n\n` +
      `→ "Hi ${name}, you're a ${role} who loves ${lang}."\n` +
      `→ "Since ${year}, that's ${Math.max(0,exp)} year(s) of experience!"\n` +
      `→ "Char sum of '${lang}' = ${sum}"`;
  };
  updateTemplate();
</script>