import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ProjectContainer = styled(motion.div)`
  margin-bottom: 40px;
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const ProjectDate = styled.span`
  font-size: 15px;
  color: #666;
`;

export const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #2c3e50;
`;

export const ProjectStatus = styled.span<{ status: string }>`
  font-size: 14px;
  color: ${({ status }) => (status === "제작완료" ? "#27ae60" : "#e74c3c")};
  background: ${({ status }) =>
    status === "제작완료"
      ? "rgba(39, 174, 96, 0.1)"
      : "rgba(231, 76, 60, 0.1)"};
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const ProjectDuration = styled.span`
  font-size: 14px;
  color: #7f8c8d;
  padding: 2px 8px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Description = styled.div`
  margin-left: 24px;
  border-left: 2px;
  padding-left: 16px;
`;

export const SubSection = styled.div`
  margin: 16px 0;
  margin-left: 160px;
`;

export const SubTitle = styled.h4`
  font-size: 15px;
  font-weight: 500;
  color: #34495e;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 16px;
`;

export const ListItem = styled.li`
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
  position: relative;

  &::before {
    content: "-";
    position: absolute;
    left: -16px;
  }
`;

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

export const SkillTag = styled.span`
  font-size: 13px;
  color: #2980b9;
  background: rgba(41, 128, 185, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
`;

export const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  img {
    height: 20px;
  }
`;

export const TechIcon = styled.img`
  height: 20px;
  vertical-align: middle;
`;
