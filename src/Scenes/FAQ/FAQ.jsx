import React from "react";
import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";

const faq = [
  {
    question: "What is this website for?",
    answer: "This website is for data analytics made with React",
  },
  {
    question: "Which technologies are used in this project?",
    answer:
      "This project is built with ReactJS, Context API, FullCalendar, Nivo charts and for faster development chatGPT",
  },
  {
    question: "How ChatGPT was used to fasten development process?",
    answer:
      "ChatGPT was used to generate code snippets for a specified tasks such as sidebar, accordion etc, and then the code snippet was modified to import in this project",
  },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions" />
      {faq.map((query) => (
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              {query.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{query.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
