import { AllTeamMemberDashboard } from '@/components/AllTeamMembersDashboard';
import { Bounded } from '@seoul-rebels/ui';

const TeamMembersPage = () => {
  return (
    <Bounded size="full" isCentered={false}>
      <AllTeamMemberDashboard order="name" />
    </Bounded>
  );
};

export default TeamMembersPage;
