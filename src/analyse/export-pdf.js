/**
 * PDF Export module using jsPDF for Document Analysis Studio
 */
import { jsPDF } from 'jspdf';

export function exportToPDF(sujet, activeSubjectKey) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const nom = document.getElementById('student-nom')?.value || 'Élève';
  const prenom = document.getElementById('student-prenom')?.value || '';
  const dateStr = new Date().toLocaleDateString('fr-FR');

  let y = 15;
  const margin = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - (margin * 2);

  function checkPage(needHeight = 20) {
    if (y + needHeight > 280) {
      doc.addPage();
      y = 15;
    }
  }

  // En-tête officiel
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(30, 58, 138);
  doc.text('DemoRevis — Analyse Critique de Documents (HGGSP 1ère)', margin, y);
  y += 8;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.text(`Élève : ${nom} ${prenom} | Date : ${dateStr} | ${sujet.badge}`, margin, y);
  y += 6;

  doc.setDrawColor(200, 200, 200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Sujet & Consigne
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(20, 20, 20);
  const splitTitle = doc.splitTextToSize(`Sujet : ${sujet.title}`, contentWidth);
  doc.text(splitTitle, margin, y);
  y += (splitTitle.length * 5) + 3;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  const splitConsigne = doc.splitTextToSize(`Consigne : ${sujet.question}`, contentWidth);
  doc.text(splitConsigne, margin, y);
  y += (splitConsigne.length * 4) + 6;

  // Sections de réponses de l'élève
  sujet.sections.forEach(section => {
    checkPage(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(30, 58, 138);
    doc.text(section.title, margin, y);
    y += 6;

    section.fields.forEach(field => {
      const value = document.getElementById(field.id)?.value?.trim() || '(Non rédigé)';
      checkPage(18);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(40, 40, 40);
      doc.text(field.label, margin, y);
      y += 5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      const splitVal = doc.splitTextToSize(value, contentWidth);
      checkPage(splitVal.length * 4.5);
      doc.text(splitVal, margin, y);
      y += (splitVal.length * 4.5) + 5;
    });

    y += 3;
  });

  const fileName = `Analyse_Critique_${activeSubjectKey}_${nom.replace(/\s+/g, '_')}.pdf`;
  doc.save(fileName);
}
