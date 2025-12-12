import React from 'react';
import Giscus from '@giscus/react';

const GISCUS_CONFIG = {
  repo: "GauravPatel21/forexverse-comments", 
  repoId: "R_kgDOQnk8yA",
  category: "General",                        
  categoryId: "DIC_kwDOQnk8yM4CztSx",
};

interface CommentsProps {
  term: string; // The Post ID or Title to map comments to
}

const Comments: React.FC<CommentsProps> = ({ term }) => {
  return (
    <div className="mt-16 animate-fade-up">
      <h3 className="text-2xl font-display font-bold text-brand-text mb-8 tracking-tight">Market Discussion</h3>
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-premium-sm border border-brand-border">
        {/* 
           NOTE: If you see "Refused to connect", ensure:
           1. The repo 'GauravPatel21/forexverse-comments' is PUBLIC.
           2. The Giscus App is installed on that repo.
           3. Discussions feature is enabled in Repo Settings.
        */}
        <Giscus
          id="comments"
          repo={GISCUS_CONFIG.repo as any}
          repoId={GISCUS_CONFIG.repoId}
          category={GISCUS_CONFIG.category}
          categoryId={GISCUS_CONFIG.categoryId}
          mapping="specific" 
          term={term} // Keeps comments attached to the specific article ID
          strict="0" // Corresponds to data-strict="0" in your script
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="light"
          lang="en"
          loading="lazy"
        />
        <div className="mt-6 text-center border-t border-gray-100 pt-4">
            <p className="text-xs text-brand-muted">
                Discussion threads are moderated. Only admins can manage or delete comments.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;