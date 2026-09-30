import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  { title: "Overall Meaning", accent: "#2563eb", background: "#eff6ff", border: "#bfdbfe", description: "Start with the meaning of the whole passage. The correct option must fit the message and topic, not just the words immediately around the gap." },
  { title: "Immediate Context", accent: "#7c3aed", background: "#f5f3ff", border: "#ddd6fe", description: "Read before and after the blank. Nearby words often provide the grammatical and semantic clues needed to eliminate unsuitable choices." },
  { title: "Grammar", accent: "#059669", background: "#ecfdf5", border: "#a7f3d0", description: "Check whether the candidate word fits the sentence structure, including part of speech, verb form, articles, prepositions and agreement." },
  { title: "Meaning & Usage", accent: "#d97706", background: "#fffbeb", border: "#fde68a", description: "Similar-looking choices can have different meanings or usage. Select the word that expresses the intended meaning naturally in context." },
  { title: "Collocation", accent: "#0891b2", background: "#ecfeff", border: "#a5f3fc", description: "Notice familiar word combinations and fixed patterns. A natural collocation can provide a strong clue when several options seem possible." },
  { title: "Whole-Text Check", accent: "#db2777", background: "#fdf2f8", border: "#fbcfe8", description: "After selecting an option, reread the sentence and surrounding text to confirm that the completed passage remains coherent." },
];

const DIAGNOSTIC_ITEMS = [
  { title: "Choosing from the topic only", text: "The student recognises the general subject but selects a word simply because it relates to the topic. Teach them to combine topic meaning with grammar and local context." },
  { title: "Ignoring the words around the gap", text: "The student reads too little context and guesses. Train them to inspect the words immediately before and after the blank before considering the options." },
  { title: "Grammar fit is overlooked", text: "The student understands the general meaning but selects the wrong word form or part of speech. Make the grammatical slot explicit." },
  { title: "Synonyms treated as interchangeable", text: "Options may share a broad meaning but differ in usage or collocation. Ask what makes the chosen word fit this exact sentence." },
  { title: "Collocation is missed", text: "A familiar word combination can distinguish the correct option from a plausible distractor. Build awareness of common academic word partnerships." },
  { title: "No whole-text verification", text: "The student commits to an option without rereading the completed passage. Teach a short final coherence check before moving on." },
];

const CLASSROOM_STEPS = [
  { number: "01", title: "Skim for the overall meaning", text: "Have the student read the passage quickly to identify the topic, central idea and repeated key words before working on individual gaps." },
  { number: "02", title: "Read around the blank", text: "Train the student to inspect the words before and after each gap. This often narrows the choices before deeper analysis is needed." },
  { number: "03", title: "Identify the grammatical slot", text: "Ask what type of word is required: noun, verb, adjective, adverb, preposition or another grammatical form. Eliminate options that cannot fit." },
  { number: "04", title: "Compare meaning and usage", text: "Among grammatically possible options, compare the exact meanings and how naturally each word works in the sentence." },
  { number: "05", title: "Check collocation", text: "Look for familiar combinations such as verb-noun, adjective-noun or preposition patterns that make one option more natural than another." },
  { number: "06", title: "Reread the completed text", text: "After filling the gaps, reread the relevant sentences and check that the choices create a coherent and grammatically natural passage." },
];

const FEEDBACK_EXAMPLES = [
  { area: "Overall Meaning", accent: "#2563eb", text: "You identified the topic correctly, but your choice was based mainly on the topic. Check whether the word also fits the meaning of the complete sentence." },
  { area: "Context", accent: "#7c3aed", text: "Before choosing an option, read the words on both sides of the blank. They often provide enough information to eliminate several choices." },
  { area: "Grammar", accent: "#059669", text: "Your choice is related to the meaning, but the grammatical form does not fit the sentence. First identify what type of word the gap requires." },
  { area: "Meaning & Usage", accent: "#d97706", text: "These options have similar meanings, but only one fits the intended use in this sentence. Compare the exact meaning and usage rather than choosing a general synonym." },
  { area: "Collocation", accent: "#0891b2", text: "The sentence contains a familiar word combination. Look for the option that naturally completes that combination rather than relying on the topic alone." },
  { area: "Verification", accent: "#db2777", text: "Once you choose an option, reread the sentence and the surrounding text. A final coherence check can reveal a choice that initially looked plausible." },
];

function SectionLabel({ children, accent = "#2563eb" }) {
  return <div style={{ color: accent, fontSize: "10px", fontWeight: 900, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "7px" }}>{children}</div>;
}

function InfoCard({ label, value, accent, background, border }) {
  return <div style={{ background, border: `1px solid ${border}`, borderRadius: "13px", padding: "17px 18px", minHeight: "88px", boxSizing: "border-box" }}>
    <div style={{ color: "#64748b", fontSize: "10px", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>{label}</div>
    <div style={{ color: accent, fontSize: "15px", fontWeight: 900, lineHeight: 1.35 }}>{value}</div>
  </div>;
}

function FocusCard({ area }) {
  return <div style={{ background: area.background, border: `1px solid ${area.border}`, borderRadius: "13px", padding: "17px", minHeight: "142px", boxSizing: "border-box" }}>
    <div style={{ display: "inline-flex", alignItems: "center", padding: "5px 8px", borderRadius: "999px", background: "#ffffff", border: `1px solid ${area.border}`, color: area.accent, fontSize: "10px", fontWeight: 900, letterSpacing: "0.04em", marginBottom: "10px" }}>{area.title}</div>
    <p style={{ margin: 0, color: "#475569", fontSize: "12px", lineHeight: 1.65 }}>{area.description}</p>
  </div>;
}

function DiagnosticCard({ item, index }) {
  return <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "15px", boxShadow: "0 4px 12px rgba(15, 23, 42, 0.035)" }}>
    <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "9px", background: "#eff6ff", border: "1px solid #bfdbfe", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 900 }}>{String(index + 1).padStart(2, "0")}</div>
    <div><h4 style={{ margin: "1px 0 5px", color: "#334155", fontSize: "13px", fontWeight: 900 }}>{item.title}</h4><p style={{ margin: 0, color: "#64748b", fontSize: "12px", lineHeight: 1.6 }}>{item.text}</p></div>
  </div>;
}

function ClassroomStep({ step }) {
  return <div style={{ display: "flex", alignItems: "flex-start", gap: "13px", padding: "14px 0", borderBottom: "1px solid #e2e8f0" }}>
    <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#f5f3ff", border: "1px solid #ddd6fe", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 900 }}>{step.number}</div>
    <div><h4 style={{ margin: "1px 0 5px", color: "#334155", fontSize: "13px", fontWeight: 900 }}>{step.title}</h4><p style={{ margin: 0, color: "#64748b", fontSize: "12px", lineHeight: 1.65 }}>{step.text}</p></div>
  </div>;
}

export default function ReadingFillInBlanksDropdownStrategy() {
  const navigate = useNavigate();
  const cardGrid = { marginTop: "18px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "14px" };
  const heading = { margin: 0, color: "#0f172a", fontSize: "26px", lineHeight: 1.25, fontWeight: 900 };
  const body = { margin: "9px 0 0", color: "#64748b", fontSize: "13px", lineHeight: 1.7, maxWidth: "960px" };

  return <div style={{ width: "100%", maxWidth: "1180px", margin: "0 auto", padding: "24px", boxSizing: "border-box" }}>
    <button type="button" onClick={() => navigate(-1)} style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "14px", padding: "8px 12px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#ffffff", color: "#475569", fontSize: "11px", fontWeight: 800, cursor: "pointer" }}>{"\u2190"} Back to Strategy Vault</button>

    <div style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)", borderRadius: "18px", padding: "30px", color: "#ffffff", boxShadow: "0 12px 30px rgba(37, 99, 235, 0.18)", display: "flex", alignItems: "center", gap: "22px", boxSizing: "border-box" }}>
      <div style={{ width: "78px", height: "78px", flexShrink: 0, borderRadius: "18px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.28)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "38px" }}>{"\u{1F50E}"}</div>
      <div>
        <div style={{ fontSize: "12px", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px", opacity: 0.9 }}>Reading</div>
        <h1 style={{ margin: 0, fontSize: "30px", lineHeight: 1.15, fontWeight: 900, letterSpacing: "-0.02em" }}>Fill in the Blanks (Dropdown) — Examiner Strategy</h1>
        <p style={{ margin: "10px 0 0", fontSize: "13px", lineHeight: 1.65, maxWidth: "880px", opacity: 0.95 }}>A practical teacher reference for diagnosing how effectively a student uses context, grammar, meaning and word combinations to complete an academic reading text.</p>
      </div>
    </div>

    <section style={{ marginTop: "30px" }}><SectionLabel>Task Overview</SectionLabel><h2 style={heading}>Fill in the Blanks (Dropdown) at a glance</h2><p style={body}>The teacher's job is to determine whether the student can use the information in and around each gap to identify the word that best completes the passage. Look beyond whether the final choice is right or wrong and identify which clue the student is failing to use.</p>
      <div style={cardGrid}>
        <InfoCard label="Task" value="Fill in the Blanks (Dropdown)" accent="#2563eb" background="#eff6ff" border="#bfdbfe" />
        <InfoCard label="Prompt" value="Text up to 200 words" accent="#7c3aed" background="#f5f3ff" border="#ddd6fe" />
        <InfoCard label="Skill" value="Reading" accent="#059669" background="#ecfdf5" border="#a7f3d0" />
        <InfoCard label="Response" value="Select one word per gap" accent="#d97706" background="#fffbeb" border="#fde68a" />
        <InfoCard label="Scoring" value="Partial credit per correct blank" accent="#0891b2" background="#ecfeff" border="#a5f3fc" />
      </div>
    </section>

    <section style={{ marginTop: "32px" }}><SectionLabel>Teacher Assessment Guide</SectionLabel><h2 style={heading}>What should the teacher look for?</h2><p style={body}>A strong diagnosis separates broad comprehension from the more local decisions needed to choose a word. Check whether the student is using the whole passage, immediate context, grammar and natural usage together.</p><div style={{ ...cardGrid, gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>{FOCUS_AREAS.map(area => <FocusCard key={area.title} area={area} />)}</div></section>

    <section style={{ marginTop: "32px" }}><SectionLabel accent="#d97706">Diagnostic Focus</SectionLabel><h2 style={heading}>Common problems to distinguish</h2><p style={body}>The useful question is not simply “Why did the student get this blank wrong?” but “Which evidence did the student fail to use?”</p><div style={{ ...cardGrid, gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))" }}>{DIAGNOSTIC_ITEMS.map((item, index) => <DiagnosticCard key={item.title} item={item} index={index} />)}</div></section>

    <section style={{ marginTop: "32px" }}><SectionLabel accent="#7c3aed">Classroom Strategy</SectionLabel><h2 style={heading}>A practical teaching sequence</h2><p style={body}>Build a repeatable decision process rather than encouraging the student to guess from vocabulary recognition alone.</p><div style={{ marginTop: "16px", background: "#ffffff", border: "1px solid #ddd6fe", borderTop: "4px solid #7c3aed", borderRadius: "14px", padding: "8px 18px 4px", boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)" }}>{CLASSROOM_STEPS.map(step => <ClassroomStep key={step.number} step={step} />)}</div></section>

    <section style={{ marginTop: "32px" }}><SectionLabel accent="#0891b2">Teacher Feedback Language</SectionLabel><h2 style={heading}>Turn assessment into a teaching target</h2><p style={body}>Feedback should identify the evidence the student should have used and the decision-making habit to practise next.</p><div style={{ ...cardGrid, gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))" }}>{FEEDBACK_EXAMPLES.map(item => <div key={item.area} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderLeft: `4px solid ${item.accent}`, borderRadius: "11px", padding: "14px 15px", boxShadow: "0 4px 12px rgba(15, 23, 42, 0.035)" }}><div style={{ color: item.accent, fontSize: "10px", fontWeight: 900, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "7px" }}>{item.area}</div><p style={{ margin: 0, color: "#475569", fontSize: "12px", lineHeight: 1.65 }}>{item.text}</p></div>)}</div></section>

    <section style={{ marginTop: "32px" }}><SectionLabel accent="#059669">Quick Reference</SectionLabel><div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", borderLeft: "5px solid #059669", borderRadius: "14px", padding: "19px" }}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>{[
      ["1. Skim the passage", "Establish the overall topic and meaning first."],
      ["2. Read around the gap", "Use the immediate context to narrow the choices."],
      ["3. Check grammar", "Identify the grammatical form required by the sentence."],
      ["4. Compare meaning", "Choose the option that expresses the intended meaning."],
      ["5. Check collocation", "Look for natural and familiar word combinations."],
      ["6. Verify the text", "Reread the completed sentence or passage before moving on."],
    ].map(([title, text]) => <div key={title}><div style={{ color: "#047857", fontSize: "12px", fontWeight: 900, marginBottom: "5px" }}>{title}</div><div style={{ color: "#475569", fontSize: "11px", lineHeight: 1.55 }}>{text}</div></div>)}</div></div></section>

    <section style={{ marginTop: "28px" }}><div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "12px", padding: "15px 17px" }}><div style={{ color: "#475569", fontSize: "10px", fontWeight: 900, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "6px" }}>Official Scoring Reference</div><p style={{ margin: 0, color: "#64748b", fontSize: "11px", lineHeight: 1.6 }}>Pearson's current PTE Academic description states that Fill in the Blanks (Dropdown) presents text of up to 200 words with gaps and requires the student to select the appropriate word from a drop-down list. The response is judged using contextual and grammatical cues, and partial credit applies when one or more blanks are incorrect. This question type affects the Reading score.</p></div></section>
  </div>;
}
