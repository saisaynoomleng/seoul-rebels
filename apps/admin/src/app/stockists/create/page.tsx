import { handleCreateStockits } from '@/actions/handleCreateStockists';
import { handleSanityImageUpload } from '@/actions/handleSanityImageUpload';
import { Bounded, CreateStockistForm } from '@seoul-rebels/ui';

const StockistCreatePages = () => {
  return (
    <Bounded size="full" isCentered={false}>
      <CreateStockistForm
        action={handleCreateStockits}
        imageUploadAction={handleSanityImageUpload}
      />
    </Bounded>
  );
};

export default StockistCreatePages;
