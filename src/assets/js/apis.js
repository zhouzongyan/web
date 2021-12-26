import { Post } from '@/assets/js/api';

export const Login = (name, pass) => Post('/lg/login', { name: name, pass: pass });
export const UInfo = () => Post('/lg/info', {});

//catch
export const UtilCatch = (that, err, fn) => {
    const stat = err.response ? err.response.status : 0;
    if (stat == 403) {
        that.$store.commit('clearUserInfo');
        that.$router.push('/login')
        return;
    }
    let isnotshow = false;
    if (fn && typeof fn === 'function') {
        isnotshow = fn(err, that);
    }
    if (isnotshow != true) {
        if (stat == 404) {
            that.$msgErr('未找到内容');
        } else if (stat == 405) {
            that.$msgErr('无权限');
        } else {
            that.$msgErr(
                err.response ? err.response.data || "服务器错误" : "网络错误"
            );
        }
    }
}


//User
export const UserPage = pars => Post('/user/page', pars);
export const UserNew = pars => Post('/user/new', pars);
export const UserInfo = id => Post('/user/info', { id });
export const UserUpinfo = pars => Post('/user/upinfo', pars);
export const UserUpss = pars => Post('/user/upass', pars);
export const UserActive = (id, act) => Post('/user/active', { id, act });
export const UserPerm = pars => Post('/user/perm', pars);


//Org
export const OrgList = pars => Post('/org/list', pars);
export const OrgNew = pars => Post('/org/new', pars);
export const OrgInfo = id => Post('/org/info', { id });
export const OrgUsers = id => Post('/org/users', { id });
export const OrgSave = pars => Post('/org/save', pars);
export const OrgRm = id => Post('/org/rm', { id });
export const OrgUserEdit = pars => Post('/org/user/edit', pars);
export const OrgUserRm = (id, uid) => Post('/org/user/rm', { id, uid });
export const OrgPipeAdd = (id, pipeId) => Post('/org/pipe/add', { id, pipeId });
export const OrgPipeRm = (id, pipeId) => Post('/org/pipe/rm', { id, pipeId });

//Pipeline
export const PipelineList = pars => Post('/pipeline/pipelines', pars);
export const OrgPipelineList = pars => Post('/pipeline/org/pipelines', pars);
export const NewPipeline = pars => Post('/pipeline/new', pars);
export const PipelineInfo = pars => Post('/pipeline/info', pars);
export const SavePipeline = pars => Post('/pipeline/save', pars);
export const RunPipeline = pars => Post('/pipeline/run', pars);
export const PipelineVersions = pars => Post('/pipeline/pipelineVersions', pars);
export const PipelineVersion = (id) => Post('/pipeline/pipelineVersion', { id });
export const DeletePipeline = (id) => Post('/pipeline/delete', { id });
export const CopyPipeline = (id) => Post('/pipeline/copy', { pipelineId: id });
export const RebuildVersion = (pipelineVersionId) => Post('/pipeline/rebuild', { pipelineVersionId: pipelineVersionId });
export const SearchSha = pars => Post('/pipeline/search/sha', pars);
export const SearchBranch = pars => Post('/pipeline/search/branch', pars);
//pieplineVersion
export const DeletePipelineVersion = (id) => Post('/pipelineVersion/delete', { id: id });
//piepline Vars
export const PipelineVars = pars => Post('/pipeline/vars', pars);
export const SavePipelineVars = pars => Post('pipeline/var/save', pars);
export const DeletePipelineVars = pars => Post('/pipeline/var/del', pars);
//yml
export const YmlTemplates = () => Post('/yml/templates');
export const YmlPlugins = () => Post('/yml/plugins');

//Dashboard
export const AllPipelines = () => Post('/dashboard/pipelines');
export const AllBuilds = () => Post('/dashboard/builds');
export const AllSuccess = () => Post('/dashboard/build/success');
export const AllFailed = () => Post('/dashboard/build/failed');

//Runtime
export const RuntimeStages = (pvId) => Post('/runtime/stages', { pvId });
export const RuntimeCmds = (stepId) => Post('/runtime/cmds', { stepId });
export const RuntimeBuild = (buildId) => Post('/runtime/build', { buildId });
export const RuntimeCancel = (buildId) => Post('/runtime/cancel', { buildId });
export const RuntimeLogs = (buildId, stepId, offset) => Post('/runtime/logs', { buildId, stepId, offset });

//Artifact
export const ArtOrgList = pars => Post('/art/org-list', pars);
export const ArtInfo = id => Post('/art/info', { id });
export const ArtEdit = pars => Post('/art/edit', pars);
export const ArtRm = id => Post('/art/rm', { id });
export const ArtPackList = pars => Post('/art/package/list', pars);
export const ArtVerList = pars => Post('/art/version/list', pars);
export const ArtVerInfos = id => Post('/art/version/infos', { id });
export const ArtVerSave = pars => Post('/art/version/save', pars);
export const ArtVerRm = id => Post('/art/version/rm', { id });
export const ArtVerUrl = (id, path) => Post('/art/version/url', { id, path });

//trigger
export const TriggerList = pars => Post('/trigger/triggers', pars);
export const SaveTrigger = pars => Post('/trigger/save', pars);
export const DeleteTrigger = id => Post('/trigger/delete', { id: id });
//trigger runs
export const TriggerRuns = pars => Post('/trigger/runs', pars);