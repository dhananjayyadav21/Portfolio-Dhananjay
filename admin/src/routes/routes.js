import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashbord';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Certificate from "../components/Certificate"

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/about" element={<AboutSection />} />
    <Route path="/projects" element={<ProjectsSection />} />
    <Route path="/skills" element={<SkillsSection />} />
    <Route path="/contact" element={<ContactSection />} />
    <Route path="/Certificate" element={<Certificate />} />
  </Routes>
);

export default AppRoutes;
