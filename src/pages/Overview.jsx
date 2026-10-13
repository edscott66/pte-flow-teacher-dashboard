import "./Overview.css";
import { useAuth } from "../AuthContext";

export default function Overview() {
  const { roleData } = useAuth();
  const displayName = roleData?.name || "Teacher";

  return (
    <div className="overview-page">
      <div className="overview-hero">
        <div>
          <span className="overview-kicker">TEACHER DASHBOARD</span>
          <h1>Welcome back, {displayName}</h1>
          <p>
            This is your central workspace for managing students, monitoring
            progress, communicating with learners, and using the PTE Master
            Teacher tools.
          </p>
        </div>
      </div>

      <section className="overview-section">
        <div className="overview-section-heading">
          <span>YOUR DASHBOARD</span>
          <h2>What each section is for</h2>
        </div>

        <div className="overview-grid">
          <article className="overview-card">
            <div className="overview-card-icon">ST</div>
            <div>
              <h3>Students</h3>
              <p>
                View and manage your student roster, open individual student
                records, update student information, and review available
                course and progress information.
              </p>
            </div>
          </article>

          <article className="overview-card">
            <div className="overview-card-icon">ST</div>
            <div>
              <h3>Activation Codes</h3>
              <p>
                Generate activation codes for students who need to activate
                the Student App. Codes are part of the student onboarding
                process before the student is added to your teaching roster.
              </p>
            </div>
          </article>

          <article className="overview-card">
            <div className="overview-card-icon">ST</div>
            <div>
              <h3>Analytics</h3>
              <p>
                Use the existing analytics area to review the dashboard's
                available performance information and identify patterns that
                can support your teaching decisions.
              </p>
            </div>
          </article>

          <article className="overview-card">
            <div className="overview-card-icon">ST</div>
            <div>
              <h3>Broadcast</h3>
              <p>
                Send messages from the Dashboard to students through the
                existing broadcast system. This area is intended for teacher
                communication with students using the connected Student App.
              </p>
            </div>
          </article>

          <article className="overview-card overview-card-wide">
            <div className="overview-card-icon">ST</div>
            <div>
              <h3>PTE Master Teacher</h3>
              <p>
                This is the specialist teaching workspace. It contains the
                Calibration Bench, Evaluation Reports, Calibration Progress,
                Lesson Plans, Band &amp; Score Translator, and the Examiner
                Strategy Vault.
              </p>
              <div className="overview-tags">
                <span>Calibration</span>
                <span>Evaluation</span>
                <span>Lesson Plans</span>
                <span>Score Tools</span>
                <span>Examiner Strategies</span>
              </div>
            </div>
          </article>

          <article className="overview-card">
            <div className="overview-card-icon">ST</div>
            <div>
              <h3>Profile</h3>
              <p>
                Manage your teacher profile and account-related information.
                This is also where personal account controls belong rather
                than in the general Dashboard settings.
              </p>
            </div>
          </article>

          <article className="overview-card">
            <div className="overview-card-icon">ST</div>
            <div>
              <h3>Settings</h3>
              <p>
                General Dashboard settings will live here, separate from your
                personal profile and account information.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="overview-section overview-workflow">
        <div className="overview-section-heading">
          <span>START HERE</span>
          <h2>A typical teacher workflow</h2>
        </div>

        <div className="overview-workflow-grid">
          <div className="overview-step">
            <span>1</span>
            <div>
              <h3>Set up your students</h3>
              <p>
                Add students to your roster and use Activation Codes when a
                student needs to activate the Student App.
              </p>
            </div>
          </div>

          <div className="overview-step">
            <span>2</span>
            <div>
              <h3>Manage learning</h3>
              <p>
                Use student records, available analytics, and the teaching
                tools to understand progress and support lessons.
              </p>
            </div>
          </div>

          <div className="overview-step">
            <span>3</span>
            <div>
              <h3>Communicate</h3>
              <p>
                Use Broadcast when you need to send information to students
                through the connected student experience.
              </p>
            </div>
          </div>

          <div className="overview-step">
            <span>4</span>
            <div>
              <h3>Develop your teaching</h3>
              <p>
                Use PTE Master Teacher for calibration, evaluation, lesson
                planning, score interpretation, and examiner-focused strategy
                work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}