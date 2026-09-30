import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  ["Context & Meaning", "#2563eb", "#eff6ff", "Can the student use the surrounding sentence and wider passage meaning to choose the word that fits best?"],
  ["Collocation", "#059669", "#ecfdf5", "Does the chosen word form a natural and appropriate word combination with the words around the gap?"],
  ["Grammar & Word Form", "#d97706", "#fffbeb", "Does the student recognise the grammatical role required by the sentence, including noun, verb, adjective or adverb form?"],
  ["Word Choice", "#7c3aed", "#f5f3ff", "Can the student distinguish plausible distractors from the word whose meaning is precise for the context?"],
];

const DIAGNOSTIC_ITEMS = [
  ["Collocation mismatch", "#059669", "#ecfdf5", "The word is grammatically possible but does not form a natural academic expression with the surrounding words.", "Teach the student to test the words immediately before and after the gap."],
  ["Incorrect grammatical form", "#d97706", "#fffbeb", "The student chooses a related word but the form does not fit the grammatical structure.", "Ask what part of speech the gap requires before considering meaning."],
  ["Meaning or context mismatch", "#2563eb", "#eff6ff", "The selected word looks plausible but does not fit the meaning of the sentence or passage.", "Encourage the student to reread the complete sentence, not just the gap."],
  ["Familiar-word distractor", "#dc2626", "#fef2f2", "The student selects a familiar word without checking grammar, collocation and context.", "Use elimination rather than choosing the first recognisable word."],
];

const CLASSROOM_STEPS = [
  ["01", "Read the whole sentence", "Do not look only at the gap. Read enough of the sentence to understand what the writer is saying."],
  ["02", "Identify the grammatical requirement", "Check nearby articles, prepositions, verbs and modifiers to determine what form is needed."],
  ["03", "Check the collocation", "Test which candidate naturally combines with the words immediately before and after the gap."],
  ["04", "Compare the candidates", "Eliminate words that fail grammatically, semantically or collocationally."],
  ["05", "Reread the completed sentence", "Check the final choice against the sentence meaning and wider passage before moving on."],
];

const FEEDBACK = [
  ["Context", "#2563eb", "#eff6ff", "Check the complete sentence before choosing the word. The surrounding meaning gives you an important clue."],
  ["Collocation", "#059669", "#ecfdf5", "The word is possible on its own, but it does not naturally combine with the words around the gap."],
  ["Grammar", "#d97706", "#fffbeb", "Your choice is related to the correct answer, but the grammatical form does not fit the sentence."],
  ["Elimination", "#7c3aed", "#f5f3ff", "Before choosing a familiar word, eliminate the options that do not fit the grammar, meaning or collocation."],
];

function Label({ children }) {
  return <div style={{ display:"inline-flex", padding:"6px 10px", borderRadius:"999px", background:"#e0e7ff", color:"#4338ca", fontSize:"10px", fontWeight:900, letterSpacing:"0.08em", textTransform:"uppercase" }}>{children}</div>;
}

function FocusCard({ item }) {
  return (
    <div style={{ padding:"18px", borderRadius:"14px", background:item[2], border:`1px solid ${item[1]}33`, minHeight:"145px" }}>
      <div style={{ width:"34px", height:"34px", borderRadius:"10px", background:item[1], color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, marginBottom:"12px" }}>✓</div>
      <h3 style={{ margin:0, color:"#0f172a", fontSize:"15px", fontWeight:900 }}>{item[0]}</h3>
      <p style={{ margin:"8px 0 0", color:"#475569", fontSize:"12px", lineHeight:1.65 }}>{item[3]}</p>
    </div>
  );
}

function DiagnosticCard({ item }) {
  return (
    <div style={{ padding:"18px", borderRadius:"14px", background:item[2], border:`1px solid ${item[1]}55` }}>
      <div style={{ display:"flex", alignItems:"center", gap:"9px", marginBottom:"8px" }}>
        <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:item[1] }} />
        <h3 style={{ margin:0, color:"#0f172a", fontSize:"14px", fontWeight:900 }}>{item[0]}</h3>
      </div>
      <p style={{ margin:0, color:"#475569", fontSize:"12px", lineHeight:1.65 }}>{item[3]}</p>
      <div style={{ marginTop:"12px", padding:"10px 12px", borderRadius:"9px", background:"#fff", color:"#64748b", fontSize:"11px", lineHeight:1.55 }}>
        <strong style={{ color:"#334155" }}>Teacher clue:</strong> {item[4]}
      </div>
    </div>
  );
}

function Step({ item }) {
  return (
    <div style={{ display:"flex", gap:"14px", padding:"16px", borderRadius:"13px", background:"#fff", border:"1px solid #e2e8f0", boxShadow:"0 3px 12px rgba(15,23,42,.04)" }}>
      <div style={{ width:"42px", height:"42px", flexShrink:0, borderRadius:"12px", background:"#eef2ff", color:"#4338ca", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", fontWeight:900 }}>{item[0]}</div>
      <div><h3 style={{ margin:0, color:"#0f172a", fontSize:"14px", fontWeight:900 }}>{item[1]}</h3><p style={{ margin:"6px 0 0", color:"#64748b", fontSize:"12px", lineHeight:1.65 }}>{item[2]}</p></div>
    </div>
  );
}

export default function ReadingFillInBlanksDragDropStrategy() {
  const navigate = useNavigate();
  const heading = { margin:0, color:"#0f172a", fontSize:"26px", lineHeight:1.25, fontWeight:900 };
  const body = { margin:"9px 0 0", color:"#64748b", fontSize:"13px", lineHeight:1.7, maxWidth:"960px" };

  return (
    <div style={{ width:"100%", maxWidth:"1180px", margin:"0 auto", padding:"24px", boxSizing:"border-box" }}>
      <button type="button" onClick={() => navigate(-1)} style={{ display:"inline-flex", alignItems:"center", gap:"6px", marginBottom:"14px", padding:"8px 12px", borderRadius:"8px", border:"1px solid #cbd5e1", background:"#fff", color:"#475569", fontSize:"11px", fontWeight:800, cursor:"pointer" }}>
        {"\u2190"} Back to Strategy Vault
      </button>

      <div style={{ background:"linear-gradient(135deg,#1d4ed8 0%,#3b82f6 100%)", borderRadius:"18px", padding:"30px", color:"#fff", boxShadow:"0 12px 30px rgba(37,99,235,.18)", display:"flex", alignItems:"center", gap:"22px", boxSizing:"border-box" }}>
        <div style={{ width:"78px", height:"78px", flexShrink:0, borderRadius:"18px", background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.28)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"38px" }}>{"\u{1F4D6}"}</div>
        <div>
          <div style={{ fontSize:"12px", fontWeight:900, letterSpacing:".08em", textTransform:"uppercase", marginBottom:"8px", opacity:.9 }}>Reading</div>
          <h1 style={{ margin:0, fontSize:"30px", lineHeight:1.15, fontWeight:900, letterSpacing:"-.02em" }}>Fill in the Blanks (Drag and Drop) — Examiner Strategy</h1>
          <p style={{ margin:"10px 0 0", fontSize:"13px", lineHeight:1.65, maxWidth:"880px", opacity:.95 }}>A practical teacher reference for diagnosing how effectively a student uses context, grammar, collocation and meaning to complete an academic reading text.</p>
        </div>
      </div>

      <section style={{ marginTop:"30px" }}>
        <Label>Task Overview</Label>
        <h2 style={{ ...heading, marginTop:"12px" }}>Fill in the Blanks (Drag and Drop) at a glance</h2>
        <p style={body}>The student completes a short reading text by dragging words from a word bank into the gaps. The teacher should look beyond whether the final answer is correct and identify the reasoning skill that caused an incorrect choice.</p>
        <div style={{ marginTop:"18px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"12px" }}>
          {[["Task","Fill in the Blanks (Drag and Drop)","#2563eb","#eff6ff"],["Prompt","Text up to 80 words","#059669","#ecfdf5"],["Skill","Reading","#d97706","#fffbeb"],["Scoring","Partial credit","#7c3aed","#f5f3ff"]].map(([label,value,color,bg]) => (
            <div key={label} style={{ padding:"15px", borderRadius:"12px", background:bg, border:`1px solid ${color}33` }}>
              <div style={{ color, fontSize:"10px", fontWeight:900, textTransform:"uppercase", letterSpacing:".07em" }}>{label}</div>
              <div style={{ marginTop:"6px", color:"#0f172a", fontSize:"13px", fontWeight:800, lineHeight:1.4 }}>{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop:"34px" }}>
        <Label>Teacher Assessment Guide</Label>
        <h2 style={{ ...heading, marginTop:"12px" }}>What the teacher should look for</h2>
        <p style={body}>Use incorrect answers to diagnose the student's decision-making process. A wrong answer can reveal a vocabulary problem, grammar problem, collocation problem or failure to use wider context.</p>
        <div style={{ marginTop:"18px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:"14px" }}>
          {FOCUS_AREAS.map(item => <FocusCard key={item[0]} item={item} />)}
        </div>
      </section>

      <section style={{ marginTop:"34px" }}>
        <Label>Diagnostic Focus</Label>
        <h2 style={{ ...heading, marginTop:"12px" }}>Common reasons a student chooses the wrong word</h2>
        <p style={body}>The goal is not simply to give the correct answer. Identify the underlying reason for the error so the next practice activity can target that weakness.</p>
        <div style={{ marginTop:"18px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:"14px" }}>
          {DIAGNOSTIC_ITEMS.map(item => <DiagnosticCard key={item[0]} item={item} />)}
        </div>
      </section>

      <section style={{ marginTop:"34px" }}>
        <Label>Classroom Strategy</Label>
        <h2 style={{ ...heading, marginTop:"12px" }}>Teach a repeatable decision process</h2>
        <p style={body}>Encourage students to use the same sequence for every gap. This makes the task less dependent on guessing and gives the teacher a clear process to observe and correct.</p>
        <div style={{ marginTop:"18px", display:"grid", gap:"10px" }}>
          {CLASSROOM_STEPS.map(item => <Step key={item[0]} item={item} />)}
        </div>
      </section>

      <section style={{ marginTop:"34px" }}>
        <Label>Teacher Feedback Language</Label>
        <h2 style={{ ...heading, marginTop:"12px" }}>Useful feedback teachers can give immediately</h2>
        <div style={{ marginTop:"18px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:"14px" }}>
          {FEEDBACK.map(item => (
            <div key={item[0]} style={{ padding:"18px", borderRadius:"14px", background:item[2], border:`1px solid ${item[1]}55` }}>
              <div style={{ display:"inline-flex", padding:"5px 9px", borderRadius:"999px", background:item[1], color:"#fff", fontSize:"10px", fontWeight:900, textTransform:"uppercase", letterSpacing:".06em" }}>{item[0]}</div>
              <p style={{ margin:"12px 0 0", color:"#334155", fontSize:"12px", lineHeight:1.7 }}>“{item[3]}”</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop:"34px" }}>
        <Label>Quick Reference</Label>
        <h2 style={{ ...heading, marginTop:"12px" }}>Five questions to ask when reviewing an error</h2>
        <div style={{ marginTop:"18px", padding:"20px", borderRadius:"15px", background:"#f8fafc", border:"1px solid #e2e8f0" }}>
          {["Does the chosen word make sense in the complete sentence?","Does the word fit grammatically?","Does it form a natural collocation with the surrounding words?","Did the student check the wider meaning of the passage?","Could the student explain why the other options were eliminated?"].map((question,index) => (
            <div key={question} style={{ display:"flex", gap:"10px", alignItems:"flex-start", padding:"10px 0", borderBottom:index<4?"1px solid #e2e8f0":"none" }}>
              <div style={{ width:"24px", height:"24px", borderRadius:"8px", background:"#dbeafe", color:"#1d4ed8", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"11px", fontWeight:900 }}>{index+1}</div>
              <div style={{ color:"#334155", fontSize:"12px", lineHeight:1.6, paddingTop:"2px" }}>{question}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop:"34px" }}>
        <Label>Official Scoring Reference</Label>
        <div style={{ marginTop:"14px", padding:"20px", borderRadius:"15px", background:"#eef2ff", border:"1px solid #c7d2fe" }}>
          <h2 style={{ margin:0, color:"#312e81", fontSize:"17px", fontWeight:900 }}>Pearson PTE Academic Reading</h2>
          <p style={{ margin:"9px 0 0", color:"#4338ca", fontSize:"12px", lineHeight:1.7 }}>The current Pearson PTE Academic format describes Fill in the Blanks (Drag and Drop) as a Reading task in which students drag words into gaps in a short text. Pearson's current Score Guide lists 4–5 questions and awards partial credit for each correctly completed blank, with a minimum score of 0 for the task.</p>
          <p style={{ margin:"10px 0 0", color:"#64748b", fontSize:"11px", lineHeight:1.6 }}>Teacher note: use the official Pearson materials as the authority for the live exam format and scoring. This page is a teaching and diagnostic reference, not a replacement for the official scoring documentation.</p>
        </div>
      </section>

      <div style={{ marginTop:"34px", padding:"18px 20px", borderRadius:"14px", background:"#fff", border:"1px solid #e2e8f0", display:"flex", justifyContent:"space-between", alignItems:"center", gap:"16px", flexWrap:"wrap" }}>
        <div>
          <div style={{ color:"#0f172a", fontSize:"14px", fontWeight:900 }}>Ready to compare another Reading task?</div>
          <div style={{ marginTop:"4px", color:"#64748b", fontSize:"11px" }}>Return to the Examiner Strategy Vault.</div>
        </div>
        <button type="button" onClick={() => navigate("/master-teacher/tips")} style={{ border:"none", borderRadius:"9px", padding:"10px 15px", background:"#1d4ed8", color:"#fff", fontSize:"11px", fontWeight:900, cursor:"pointer" }}>Back to Strategy Vault</button>
      </div>
    </div>
  );
}
