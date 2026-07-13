package com.enterprise.platform.service;

import com.enterprise.platform.domain.Lead;
import com.enterprise.platform.repository.LeadRepository;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ReportService {

    private final LeadRepository leadRepository;

    @Autowired
    public ReportService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    public byte[] generateLeadReport(LocalDateTime startDate, LocalDateTime endDate) throws IOException {
        List<Lead> leads = leadRepository.findByCreatedAtBetween(startDate, endDate);

        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet("Leads Report");

            Row headerRow = sheet.createRow(0);
            String[] headers = {"ID", "Name", "Email", "Company", "Status", "Priority", "Created At"};
            for (int i = 0; i < headers.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(headers[i]);
                cell.setCellStyle(createHeaderStyle(workbook));
            }

            int rowNum = 1;
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

            for (Lead lead : leads) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(lead.getId());
                row.createCell(1).setCellValue(lead.getFirstName() + " " + lead.getLastName());
                row.createCell(2).setCellValue(lead.getEmail());
                row.createCell(3).setCellValue(lead.getCompanyName());
                row.createCell(4).setCellValue(lead.getStatus() != null ? lead.getStatus().getDisplayName() : "N/A");
                row.createCell(5).setCellValue(lead.getPriority() != null ? lead.getPriority().getDisplayName() : "N/A");
                row.createCell(6).setCellValue(lead.getCreatedAt() != null ? lead.getCreatedAt().format(formatter) : "N/A");
            }

            for (int i = 0; i < headers.length; i++) {
                sheet.autoSizeColumn(i);
            }

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            workbook.write(outputStream);
            return outputStream.toByteArray();
        }
    }

    private CellStyle createHeaderStyle(Workbook workbook) {
        CellStyle style = workbook.createCellStyle();
        Font font = workbook.createFont();
        font.setBold(true);
        style.setFont(font);
        style.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        return style;
    }
}
