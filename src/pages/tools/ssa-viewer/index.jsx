import React, { useState } from 'react';

import GraphViewerPage from '../../templates/graph-viewer-page';
import StringConstants from '../../../StringConstants';

const Page = () => {
    const [svg] = useState(
        JSON.parse(localStorage.getItem(StringConstants.localStorage.SSA_FILES)).ssaForm
    );

    return <GraphViewerPage name="SSA" graph={svg} fileName="ssa_graph" initialScale={2} />;
};

export default Page;
