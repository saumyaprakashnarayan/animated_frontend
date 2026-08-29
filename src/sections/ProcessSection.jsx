import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProcessSection.css';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section process-section" id="process" ref={sectionRef}>
      <div className="section-label">How we work</div>
      <h2 className="section-title">From <em>idea</em><br/>to production</h2>

      <div className="process-grid reveal">
        <div className="process-step">
          <div className="process-step-num">1</div>
          <div className="process-dot"></div>
          <h4>Discovery &<br/>Scoping</h4>
          <p>Deep-dive sessions to understand your business, data landscape, and success criteria. We define scope, feasibility, and expected ROI before a single line of code is written.</p>
          <div className="step-detail">
            <ul>
              <li>Stakeholder interviews (business, data, engineering)</li>
              <li>Data audit: quality, volume, labeling readiness</li>
              <li>Define success metrics and acceptance criteria</li>
              <li>Technical feasibility and risk assessment</li>
              <li>Scope, timeline, and budget agreement</li>
            </ul>
          </div>
          <span className="step-meta">Week 1–2</span>
        </div>
        <div className="process-step">
          <div className="process-step-num">2</div>
          <div className="process-dot"></div>
          <h4>Proof of<br/>Concept</h4>
          <p>Rapid prototyping to validate technical assumptions and demonstrate value. Typical delivery in 2–3 weeks with real data and measurable baseline metrics you can present to leadership.</p>
          <div className="step-detail">
            <ul>
              <li>Data preprocessing and exploratory analysis</li>
              <li>Baseline model training and benchmarking</li>
              <li>POC demo with initial performance metrics</li>
              <li>Gap analysis vs. production requirements</li>
              <li>Go/no-go recommendation with clear rationale</li>
            </ul>
          </div>
          <span className="step-meta">Week 3–5</span>
        </div>
        <div className="process-step">
          <div className="process-step-num">3</div>
          <div className="process-dot"></div>
          <h4>Build &<br/>Iterate</h4>
          <p>Agile development with weekly demos and feedback loops. We engineer for performance, reliability, and scalability from day one — not as an afterthought when problems arise.</p>
          <div className="step-detail">
            <ul>
              <li>2-week sprints with defined deliverables</li>
              <li>Weekly written progress reports + demos</li>
              <li>Continuous integration and automated testing</li>
              <li>Ongoing model improvement and feature additions</li>
              <li>Regular stakeholder reviews and course corrections</li>
            </ul>
          </div>
          <span className="step-meta">Week 6–18+</span>
        </div>
        <div className="process-step">
          <div className="process-step-num">4</div>
          <div className="process-dot"></div>
          <h4>Deploy &<br/>Support</h4>
          <p>Production deployment with full monitoring, documentation, and team enablement. Optional ongoing support packages ensure your AI systems keep improving after launch.</p>
          <div className="step-detail">
            <ul>
              <li>Staged rollout with canary deployment and rollback plan</li>
              <li>Monitoring dashboards: performance, drift, and cost</li>
              <li>Runbooks, architecture docs, and API documentation</li>
              <li>Team training and knowledge transfer sessions</li>
              <li>Optional managed operations retainer post-launch</li>
            </ul>
          </div>
          <span className="step-meta">Ongoing</span>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
